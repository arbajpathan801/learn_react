import './input.css'
  
const Table =({inputarr}) => {
    function deletehandle(index) {
        document.getElementById(index).remove()
        
      }
    return (
        <div>
    <table border={1} cellPadding={10}  width='70%'>
      <tbody>
      <tr>
        <td>Title</td>
        <td>Amount</td>
        <td>Date</td>
        <td>Manage</td>
      </tr>
      {
        inputarr.map((data,index) =>{
          return (
            
          <tr id={index} key={index}>
            <td>{data.enteredTitle}</td>
            <td>{data.enteredAmount}</td>
            <td>{data.enteredDate}</td>
            <td> <button onClick={()=>deletehandle(index)}>Delete</button></td>
          </tr>
          
          )
        })
      }
      </tbody>
    </table>
   </div>
    );
}
export default Table;