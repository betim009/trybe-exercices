// para fixar xD //

const wakeUp = () => { return 'Acordando' };
const coffe = () => { return 'Bora beber café'};
const sleep = () => { return 'Partiu caminha'};

const doingThings = (action) => {
    console.log(action());
}

doingThings(sleep);