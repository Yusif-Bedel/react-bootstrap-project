import React, { useContext} from 'react'
import './Add.css'
import { Formik } from 'formik'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import MainContext from '../../../context/context';

const Add = () => {
  const {data,setData}= useContext(MainContext)
  return (
    <div style={{padding:"100px 50px"}}>
      <Formik
       initialValues={{ image: '', title: '' , price: ''}}
       validate={values => {
       }}
       onSubmit={(values, { setSubmitting }) => {
        axios.post("http://localhost:3000/products",{
          id:uuidv4(),
          image:values.image,
          title:values.title,
          price:values.price
        }).then(res=>{
          setData([...data , res.data])
        })
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"30px"}} onSubmit={handleSubmit}>
           <input style={{padding:"10px"}}
             type="text"
             name="image"
             placeholder='enter a image'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.image}
             
           />
           {errors.image && touched.image && errors.image}
           <input style={{padding:"10px"}}
             type="text"
             name="title"
             placeholder='enter a title'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.title}
             
           />
           {errors.title && touched.title && errors.title}
           <input style={{padding:"10px"}}
             type="text"
             name="price"
             placeholder='enter a price'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}
           />
           {errors.price && touched.price && errors.price}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
  )
}

export default Add
