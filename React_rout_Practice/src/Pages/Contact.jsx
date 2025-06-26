import { Form } from "react-router-dom"


export const ContactDetails = async ({request})=>{
  try{
        const response = await request.formData();
        const data = Object.fromEntries(response);
        console.log(data);
        return null; //This will return a promise that is the Form data or the request object it can return null or value
   }catch(error){
       console.log("Error Found");
      return error;
      
    }

}
export const Contact = () =>{

    return(
        <>
      <div className="h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-amber-400 p-8 rounded-lg shadow-lg w-full max-w-md">
    <Form method="post" action="/contact" className="space-y-4">
      <label htmlFor="name" className="block">
        <input
          type="text"
          name="name"
          id="name"
          required
          autoComplete="off"
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
      </label>

      <label htmlFor="password" className="block">
        <input
          type="password"
          name="password"
          id="password"
          required
          autoComplete="off"
          placeholder="Your Password"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
      </label>

      <label htmlFor="message" className="block">
        <textarea
          name="message"
          id="message"
          required
          placeholder="Your Message"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
      </label>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Send
      </button>
    </Form>
  </div>
</div>
</>
)
}