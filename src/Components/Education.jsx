import React from "react";


import image from "../images/woman-with-tablet.jpg";

const imageAltText = "Estudiante con tablet en ambiente educativo";

const Education = () => {
    return(
        <section className="light" id="education">
            <h2>Education</h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", marginTop: "2rem" }}>
                <img src={image} alt={imageAltText} style={{ width: "200px", borderRadius: "1rem", boxShadow: "0 0 1rem #ccc" }} />
                <div>
                    <h3>Universidad de Ejemplo</h3>
                    <p>Ingeniería en Computación, 2022 - Presente</p>
                    <p>Participación en proyectos de desarrollo web y aplicaciones móviles.</p>
                </div>
            </div>
        </section>
    )
}

export default Education;
