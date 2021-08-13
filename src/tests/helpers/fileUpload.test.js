import cloudinary from 'cloudinary';
import { fileUpload } from "../../helpers/fileUpload";


cloudinary.config({ 
    cloud_name: 'dgz3ryrhw', 
    api_key: '794714318759471', 
    api_secret: 'Dh3ug3YY5ST20u4hU-u9Lg4-Ug8',
  });

describe('Test on fileUpload', () => {
    test('should load a file and return the ulr ', async () => {
        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
        const blob = await resp.blob();
        const file = new File ([blob], 'picture.png');
        const url = await fileUpload( file );
        expect(typeof url).toBe('string');

        //Deete img by id
        const segment = url.split('/');
        const imgId = segment[ segment.length - 1].replace('.png', '');
        cloudinary.v2.api.delete_resources(imgId, {}, ()=>{});
 
    });   
    test('should return a null ', async() => {
        const file = new File ([], 'picture.png');
        const url = await fileUpload( file );
        expect(url).toBe(null);
    });   
    
});
