import mongoose from "mongoose";

import User from '../models/auth.js'

export const getAllChats = async (req, res) => {
    const { email: email } = req.params
    
    try {
        const allUsers = await User.find();
        const allUserChatDetails = []
        allUsers.forEach(users => {
            allUserChatDetails.push({ chats: users.chats, email: users.email })
        })
        const foundObject = allUserChatDetails.filter(obj => obj.email === email)[0];
        res.status(200).json(foundObject)
    } catch (error) {
        // Send a JSON response with a 200 status code
        res.status(200).json({ message: 'Success!' });

    }
}