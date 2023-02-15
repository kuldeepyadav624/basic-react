import React from 'react'
import {Table} from 'react-bootstrap'
function Map() {
    const students =[
        {name:"kuldeep",email:"ykuldeep624@gmail.com",address:[
            {house:"66",city:"delhi",state:"haryana"}
        ]},
        {name:"yadav",email:"yadav@gmail.com",address:[
            {house:"66",city:"delhi",state:"haryana"}
        ]},
        {name:"regex",email:"regex@gmail.com",address:[
            {house:"66",city:"delhi",state:"haryana"}
        ]},
        {name:"monu",email:"monu@gmail.com",address:[
            {house:"66",city:"delhi",state:"haryana"}
        ]}
    ]
  return (
    <div>
        <Table border={333} >
            <tr>
                <td>s.no</td>
                <td>name</td>
                <td>email</td>
                <td>address</td>
                
            </tr>
            {
               students.map((data,i)=>
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <tbody>
                    <td>{data.address.map((item)=>
                    <tr>
                       <tr><td>{item.house}</td></tr> 
                        <td>{item.city}</td>
                        <td>{item.state}</td>
                    </tr>
                    )}</td>
                    </tbody>
                    
                </tr>
               ) 
            }
        </Table>
    </div>
  )
}

export default Map