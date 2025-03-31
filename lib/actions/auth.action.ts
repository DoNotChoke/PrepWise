"use server";

import {db} from "@/firebase/admin";

export async function SignUp(params: SignUpParams){
    const {uid, name, email, password} = params;
    try{
        const userRecord = await db.collection("users").doc(uid).get();
        if(userRecord.exists){
            return {
                success: false,
                message: "User already exists. Please sign in instead."
            }
        }
        await db.collection("users").doc(uid).set({
            name, email
        });
    }
    catch(error: any){
        console.log("Error creating user", error);
        if(error.code === "auth/email-already-exists"){
            return {
                success: false,
                message: "User already exists"
            }
        }
        return {
            success: false,
            message: "Failed to create an account."
        }
    }
}