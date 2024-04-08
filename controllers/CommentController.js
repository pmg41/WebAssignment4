// controllers/commentController.js
const Comment = require('../models/comment');

// Get all comments
exports.getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        if (comments.length === 0) {
            return res.status(404).json({ message: 'No comments found' });
        }
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single comment
exports.getCommentById = async (req, res) => {
    try {
        const commentId = req.params.id || req.query.id;
        const comment = await Comment.findById(commentId);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new comment
exports.createComment = async (req, res) => {
    const comment = new Comment({
        productId: req.body.productId,
        userId: req.body.userId,
        rating: req.body.rating,
        images: req.body.images,
        text: req.body.text
    });

    try {
        const newComment = await comment.save();
        res.status(201).json({ message: 'Comment added successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    
};

// Update a comment
exports.updateComment = async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.status(200).json({ message: 'Comment updated successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a comment
exports.deleteComment = async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id);
        if (!deletedComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
