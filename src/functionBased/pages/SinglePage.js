import React from "react";
import { useParams } from "react-router-dom";


const SinglePage = () => {
    const aboutData = 
    [
        {
            url: "about-app",
            title: "About the App",
            description1:
                "In this app, you can add, delete, submit and edit items.",
            description2: 
                "To edit items, simply double click on it. Once you are done, press the enter key to resubmit.",
            description3:
                "This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.",
        },
        {
            url: "about-author",
            title: "About the Author",
            description1:
                "Mark Watson is a certified full stack web developer.  He excels with problem solving using different technologies to create user friendly and useful applications.",
            description2:
                "Contact me at my GitHub: https://github.com/Mark33Mark",
            description3:
                "Email:  mark@watsonised.com",
        },
    ];
    
    const url = useParams()["*"];
    const aboutContent = aboutData.find(item => item.url === url);
    const { title, description1, description2, description3  } = aboutContent;

    console.log( url );

    return (
            <div className="main__content">
            <h1>{title}</h1>
            <p>{description1}</p>
            <br />
            <p>{description2}</p>
            <br />
            <p>{description3}</p>
            <br />
            </div>
        )
}

export default SinglePage