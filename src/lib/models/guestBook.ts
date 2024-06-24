import { getDatabase , ref , set , get , child} from "firebase/database";
import app from "../firebase";

const db = getDatabase(app);
const dbRef = ref(db);

export function addGuestMassage({id,username,massage,date} : {id : number , username : String, massage : String , date : String}){
    try{
        let data = {id,username,massage,date};
        set(child(dbRef,"/guestbook/" + id),data);
        return "succes add guest book";
    }catch(err){
        return "failed add guest book";
    }
}

export async function getGuestMassage(){
    try {
        let snapshot = await get(child(dbRef,"/guestbook"));

        return snapshot.val();
    }catch(err){
        return "failed get guest book";
    }
}