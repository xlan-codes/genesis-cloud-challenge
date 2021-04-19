import React, {useState, useEffect} from "react";
import {
    Card,
    CardBody,
    CardTitle,
    Table
} from 'reactstrap';
import instanceService from "../../services/instance.service";
import CreateInstance from "../modals/addinstance/addinstance.component";
import SetAlarm from "../modals/setalarm/setalarm.component";

const Instance = () => {

    const [instances, setInstances] = useState([]);
    useEffect(() => {
        instanceService.getInstances().then((res) => {
            setInstances(res.instances);
        }).catch((error) => {
        });
    }, []);

    return (
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Instance</CardTitle>
                    </div>
                    <div className="ml-auto d-flex no-block align-items-center">
                        <div className="dl">
                           <CreateInstance buttonLabel="Create Instance"/>
                        </div>
                    </div>
                </div>
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                            <th className="border-0">Instance</th>
                            <th className="border-0">Date Created</th>
                            <th className="border-0">Status</th>
                            <th className="border-0">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {instances.map((instance, id) => 
                            <tr>
                                <td>
                                    {instance.name}
                                </td>
                                <td className="blue-grey-text  text-darken-4 font-medium">{instance.created_at}</td>

                                <td>
                                    {
                                        instance.status === 'active' ? <i className="fa fa-circle text-success" id="tlp1"></i> : <i className="fa fa-circle text-orange" id="tlp1"></i>
                                    }
                                </td>
                                <td>
                                    <SetAlarm buttonLabel="Set Alarm" instance={instance}></SetAlarm>
                                </td>
                            </tr>
                        )}
                        
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
}

export default Instance;
