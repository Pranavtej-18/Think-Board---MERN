import Note from "../models/Note.js"

export async function getAllNotes(req, res) {
    console.log("===== getAllNotes called =====");

    try {
        // const notes = await Note.find().sort({ createdAt: -1 });
        const notes = await Note.find({user: req.user._id,}).sort({ createdAt: -1 });
        console.log("Notes:", notes);

        return res.status(200).json(notes);
    } catch (error) {
        console.error("FULL ERROR:");
        console.error(error);
        console.error(error.stack);

        return res.status(500).json({
            message: error.message,
            stack: error.stack
        });
    }
}

// GET -> but only particular note
export async function getNote(req,res){
    try{
        const note = await Note.findById(req.params.id);
        
        if(!note)
            return res.status(404).json({message:"No note is present to show"});
        res.status(200).json(note);
    }catch(error){
        console.error("error in fetching note");
        res.status(500).json({message:"Internal server error"});
    }
}


// POST
export async function createNotes(req,res){
    try{
        const {title, content} = req.body;
        const newNote = new Note({title, content, user:req.user._id});

        await newNote.save();
        res.status(201).json({message:"Note created successfully!"})
    }catch(error){
        console.error("Error in creating Notes");
        res.status(500).json({message:"Internal server error"});
    }
};

// PUT
export async function updateNotes(req,res){
    try{
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content},{new:true});
        if(!updatedNote)
            return res.status(404).json({message:"Not found"})
        res.status(200).json(updatedNote);
    }catch(error){
        console.error("Error in updating Notes");
        res.status(500).json({message:"Internal server error"});
    }
};

// DELETE
export async function deleteNotes(req,res){
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote)
            return res.status(404).json({message:"Id not found"});
        res.status(200).json({message:"Note deleted successfully!"});
    }catch(error){
        console.error("Error in deleting Notes!");
        res.status(500).json({message:"Internal Server Error"});
    }
};
