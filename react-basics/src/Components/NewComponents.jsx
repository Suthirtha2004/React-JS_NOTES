export const Create_new_Component = () =>{  //named export and import

  const name = "Archer";
  const Type_genre = function(){
    const val = "Series"
    return val;
  }

  const age = 15;
   
  // let canWatch = "Not Available";
  // if(age>=18){
  //   canWatch = "Watch Now" 
  // }   -- This method is beneficial as it avoids cluttering and easily passes a value and checks condition while taking a single dunakic value

  //The function method - for conditional values
  const watchFactor = () =>{
    if(age>18){
      return "Watch Now";
    }
    else{
      return "Not Available"
    }
  }

  // if(age >= 18){
  //      return (
  //   <div>
  //     <div>
  //       <img src="/moon_knight.jpg" alt=""  width="30%"  height="30%"/>
  //     </div>
  //     <h1>Hi this is my first React Project.My name is {name}</h1>
  //     <p>This way we can create conponents in React a very easy way to create components.Moonknight got a rating of {1+2+3}</p>
  //     <p>Its a  : {Type_genre()}</p>
  //     <button>Not Available</button>
  //   </div>
  // );
  // };   This has an issue because the code is being repeatedly.



  return (
    <div>
      <div>
        <img src="/moon_knight.jpg" alt=""  width="30%"  height="30%"/>
      </div>
      <h1>Hi this is my first React Project.My name is {name}</h1>
      <p>This way we can create conponents in React a very easy way to create components.Moonknight got a rating of {1+2+3}</p>
      <p>Its a  : {Type_genre()}</p>
      <button>{//age >= 18 ? "Watch Now" : "Not Available"  ---> This method is used with ternary operator as it ensures both benefit and resuability
              //canWatch
              watchFactor()
      }
       </button>
    </div>
  );
 };

 //export default Create_new_Component; --> Normal export default


export const Footer = () =>{
  return(
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum suscipit consequatur dicta voluptas quidem excepturi reprehenderit. Dignissimos tenetur laboriosam ratione.</p>
  )
 };

//There can be only one default component to be exported .

const Header = function() {
    return (
        <p>Welcome to the React Basics Notes</p>
    )
};

export default Header;