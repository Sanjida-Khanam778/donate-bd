function getElement(id){
    return document.getElementById(id);
}

document.getElementById('history-btn').addEventListener('click', function(){
    const donationBtn = getElement('donation');
    donationBtn.classList.add('hidden');
    const historyBtn = getElement('history');
    historyBtn.classList.remove('hidden');

});

document.getElementById('donation-btn').addEventListener('click', function(){
    const historyBtn = getElement('history');
    historyBtn.classList.add('hidden');
    const donationBtn = getElement('donation');
    donationBtn.classList.remove('hidden');
});

