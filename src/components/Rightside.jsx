import Card from "./Card";


function Rightside(props){
console.log(props.user);


    return(

    <div className="h-full w-full flex gap-4  overflow-x-auto scroll">

{props.user.map((elem,idx)=>{
    return (
    <Card key={idx} id={idx} number={elem.number} words={elem.words} button={elem.button} color={elem.color}/>
);
})}
    </div>
    )

}
export default Rightside;