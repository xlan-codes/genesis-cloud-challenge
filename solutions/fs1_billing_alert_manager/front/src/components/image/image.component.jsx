import React, {useState, useEffect} from "react";
import {
    Card,
    CardBody,
    CardTitle,
    Table
} from 'reactstrap';
import imageService from "../../services/image.service";

const Images = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        imageService.getImages().then((res) => {
            setImages(res.images);
          });
    }, []);

    return (
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Available Images</CardTitle>
                    </div>
                </div>
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                            <th className="border-0">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {images.map((image, index) => <tr key={index}>
                            <td>
                                {image.name}
                            </td>
                        </tr>
                    )}
                        
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
}

export default Images;
