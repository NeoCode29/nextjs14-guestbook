import { Card , CardContent , CardHeader, CardFooter } from "./ui/card";

const CardMassage = ({username , massage , date} : { username : String , massage : String , date : String}) => {
    return(<Card>
        <CardHeader>
            <h1 className="text-xl text-bold capitalize">{username}</h1>
            <p className="text-xs text-gray-300">{date}</p>
            <hr />
        </CardHeader>
        <CardContent>
            <blockquote className="italic text-gray-400">
                {`"${massage}"`}
            </blockquote>
        </CardContent>
    </Card>);
}

export default CardMassage