const counters = document.querySelectorAll('.counter');

counters.forEach(counter => { 
    counter.innerText = '0';  // counter starts from 0

// updateCounter function is created
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200  // it can be 10, 200, 300 ,400..number incerese time also increases.

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`  //Math.ceil is to avoid decimal nuv=ber
            setTimeout(updateCounter, 1)   // timw is set 
        } else { 
            counter.innerText = target     //Number recher from 0 to target ..main target number 
        }
    }

    updateCounter()
})