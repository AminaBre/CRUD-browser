const apiUrl = "https://crudapi.co.uk/api/v1/people";

// Funksjon for å legge til en ny person
export async function addPerson(personData) {
  try {
    const response = await axios.post(apiUrl, personData, {
      headers: {
        Authorization: `Bearer LEGG DIN NØKKEL HER`,
      },
    });
    console.log("Ny person lagt til:", response.data);
  } catch (error) {
    console.error("Klarte ikke å legge til personen:", error);
  }
}
