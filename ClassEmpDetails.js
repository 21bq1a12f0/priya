import React,{Component} from 'react';

class ClassEmpDetails extends Component(){
    render(){
         return(<div>
        <h1> Employee details</h1>
         <table>
           <tr>
              <th>S.No</th> 
              <th>Emp Id</th>
               <th>Emp Name</th>
                <th>Emp Salary</th>
           </tr>
            <tr>
                 <td>1</td>
                  <td>101</td>
                  <td>vijay</td>
                   <td>25,000</td>
            </tr> 
           <tr>
                 <td>2</td>
                 <td>102</td>
                 <td>charan</td>
                  <td>26,000</td>
            </tr>
           </table>
            </div>);
}
}
export default ClassEmpDetails;