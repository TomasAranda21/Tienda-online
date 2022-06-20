import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import idRandom from './idUnique';
import { storage } from '../config/firebase' 
import useAdmin from "../Hooks/useAdmin";


const uploadImages = async (img) => {

    const { 
        setImageSuc,
        setUrlImg } = useAdmin()


    const file = img

    const id = idRandom()

    const name = id + file?.name

    const metadata = {
      contentType: 'image/jpeg'
      
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, 'images/' + name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            setImageSuc(true)
            console.log('Upload is running');
            break;
        }
      },
      (error) => {

        switch (error.code) {
          case 'storage/unauthorized':

            break;
          case 'storage/canceled':

            break;

          case 'storage/unknown':
            
            break;
            
              default:
            break;
        }
      },

      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          
          setUrlImg(downloadURL);

        });
      }
    );

}



export default uploadImages