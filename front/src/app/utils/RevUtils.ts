import * as moment from 'moment';

export class RevUtils {

    static mais4dias(data: Date) {
        let ret = moment(data);
        // console.log(ret.format('D/MM/yyyy'));
        ret.add(4, 'days');
        // console.log(ret.format('D/MM/yyyy'));
        return ret.toDate();
    }

    static mais10minutos(data: Date) {
        let ret = moment(data);
        ret.add(4, 'minutes');
        return ret.toDate();
    }

    static mais1dia(data: Date) {
        let ret = moment(data);
        ret.add(1, 'days');
        return ret.toDate();
    }
}