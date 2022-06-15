import numeral from "numeral";

const manSize = (size) => {
    const unitsList = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB'];

    let unit = 'B';

    let value = numeral(size);

    unitsList.forEach((item) => {

        if (value.value() >= 1024) {

            value = value.divide(1024);

            unit = item;

        }

    });

    return [numeral(value).format('0,0.00'), unit];
}


export {
    manSize
}
