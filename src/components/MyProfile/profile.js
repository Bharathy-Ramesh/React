import React, {useState} from 'react';
import avatar from '../../assets/Avatar.png'
import axios from 'axios';

const Profile = () => {

    const [image, setImage] = useState('');
    const [ filename, setFilename] = useState('');
    const filechange = (e) => {
       console.log(e.target.files)
       setImage(e.target.files[0]);
       setFilename(e.target.files[0].name);
       console.log(image)
       
    }

    const upload = () => {
       let username = JSON.parse(localStorage.getItem('users'));
       const formData = new FormData(); 
     debugger
      // Update the formData object 
      formData.append("filename",filename);
      formData.append('custId',username.name); 
      formData.append("image",image);
    // const obj = {
    //   "filename":filename,
    //   "custId":username.name,
    //   "image":image
        
    // }
    //console.log(obj);
      // const config = {     
      //   headers: { 'content-type': 'multipart/form-data' }
      // }
      axios.post(`${process.env.REACT_APP_APILINK}/upload`, formData);
    }
    
    return (
        <React.Fragment>
            <div className="container">
                <div className="mx-auto col-md-4 w-30">
                   <img src={avatar} className="img-align" width="150" height="150" alt="avatar"/>
                   <div className='images'>
                            <input type='file' onChange={filechange} accept=".jpg,.png,.jpeg"/>
                            <input type='submit' onClick={upload} value='Upload'/>
                   </div>                  
                </div>
            </div>
        </React.Fragment>
    )
}

export default Profile;