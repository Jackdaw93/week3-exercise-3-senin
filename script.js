let endpoint = `https://restcountries.eu/rest/v2/all`;
let options = {
  method: "GET",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
};

async function getNameCountry() {
  try {
    let respoonse = await fetch(endpoint, options);
    let results = await respoonse.json();
    // console.log(results);
    let jumlah = results.length;

    console.log(`Jumalah Negara = ${jumlah}`);

    results.forEach((result) => {
      console.log(result.name);
    });
  } catch (error) {
    console.log(error);
  }
}

getNameCountry();
