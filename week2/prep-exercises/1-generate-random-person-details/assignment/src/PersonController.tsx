import { useEffect, useState } from "react";

export const PersonController = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const getPerson = async () => {
    try {
      const response = await fetch("https://randomuser.me/api?results=1");
      const data = await response.json();
      const { name: { first = "", last = "" } = {}, email = "" } =
        data.results[0];
      return { firstName: first, lastName: last, email };
    } catch (error) {
      console.error("Error fetching person:", error);
      return { firstName: "", lastName: "", email: "" };
    }
  };

  useEffect(() => {
    const fetchPerson = async () => {
      const personData = await getPerson();
      setPerson(personData);
    };

    fetchPerson();
  }, []);

  const { firstName = "", lastName = "", email = "" } = person;

  return { firstName, lastName, email };
};
