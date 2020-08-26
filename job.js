window.addEventListener("DOMContentLoaded", function () {

  document.querySelector('.button').addEventListener("click", function (event) {
    event.preventDefault();
    // console.log('buttn pressed!');

    let oform = document.forms['search-job'];
    let jobDesc = oform.elements.description.value;
    let location = oform.elements.location.value;
    let fullTimeChecked = oform.elements.full_time.checked;

    // let baseUrl = 'https://jobs.github.com/positions.json?';
    let baseUrl = 'https://still-spire-37210.herokuapp.com/positions.json?';
    let qJob = `description=${jobDesc}`;
    let qloc = `&location=${location}`;
    let qfullTime = `&full_time=${fullTimeChecked}`;
    let contateUrl = `${baseUrl}${qJob}${qloc}${qfullTime}`;

    // let jobPannel = document.querySelector('#job-pannel');
    document.querySelector('#job-pannel').innerHTML = '';

    console.log(contateUrl);

    fetch(contateUrl).then(res => {
      return res.json();
    }).then(result => {

      console.log(result);

      let template = document.getElementsByTagName('template')[0];
      // console.log(typeof result.length);

      if (result.length >= 50) {
        document.querySelector('.pagination-next').removeAttribute('disabled');
      }

      for (let i = 0; i < result.length; i++) {
        let clone = document.importNode(template.content, true);
        clone.querySelector('h4 a').textContent = result[i].title;
        clone.querySelector('h4 a').href = result[i].url;
        clone.querySelector('.company').textContent = result[i].company;
        clone.querySelector('.company').href = result[i].company_url;
        clone.querySelector('.fulltime').textContent = result[i].type;
        clone.querySelector('.location').textContent = result[i].location;

        document.querySelector('#job-pannel').appendChild(clone);
      }
    })
  })
})
