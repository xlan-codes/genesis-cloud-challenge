import React, {useState, useEffect} from "react";
import {
    Card,
    CardBody,
    CardTitle,
    Table
} from 'reactstrap';
import alarmService from "../../services/alarm.service";

const Alarm = () => {

    const [alarms, setAlarms] = useState([]);
    useEffect(() => {
        alarmService.getAlarm().then((res) => {
            setAlarms(res);
        });
    });

    return (
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Alarms</CardTitle>
                    </div>
                </div>
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                            <th className="border-0">Instance</th>
                            <th className="border-0">Threshold</th>
                            <th className="border-0">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alarms.map((alarm) => <tr>
                                <td>
                                    {alarm.instance}
                                </td>
                                <td className="blue-grey-text  text-darken-4 font-medium">{alarm.threshold}</td>
                                <td>
                                    {alarm.status  ? <i className="fa fa-circle text-success" id="tlp1"></i> : <i className="fa fa-circle text-orange" id="tlp1"></i>}
                                </td>
                            </tr>
                            )
                        }
                        
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
}

export default Alarm;
