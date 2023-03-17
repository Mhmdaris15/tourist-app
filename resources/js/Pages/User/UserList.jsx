import axios from "axios";
import React, { useState, useEffect } from "react";

const SingleUser = (props) => {
    const [imageURL, setImageURL] = useState("");

    useEffect(() => {
        axios
            .get("https://api.unsplash.com/photos/random", {
                headers: {
                    Authorization:
                        "Client-ID z7hssytjDFguYp16DjfkG0_UCPKm519J9b_2ZLpJ58c",
                },
                params: {
                    query: "nature",
                    orientation: "landscape",
                },
            })
            .then((response) => {
                setImageURL(response.data.urls.regular);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // useEffect(() => {
    //     fetch(
    //         "https://api.unsplash.com/photos/random?query=landscape&client_id=z7hssytjDFguYp16DjfkG0_UCPKm519J9b_2ZLpJ58c"
    //     )
    //         .then((response) => response.json())
    //         .then((data) => {
    //             const imageUrl = data.urls.regular;
    //             const imageTitle = data.alt_description;
    //             const link = document.createElement("a");
    //             link.download = imageTitle;
    //             link.href = imageUrl;
    //             document.body.appendChild(link);
    //             link.click();
    //             document.body.removeChild(link);
    //         });
    // }, []);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={imageURL} alt={props.name + "Image"} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>
                <h3 className="card-title">{props.email}</h3>
                <p>{props.role}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

const UserList = (props) => {
    const users = props.users;
    console.log("Userlsit : ", users);
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-4">
                {users.map((user) => (
                    <SingleUser key={user.id} {...user} />
                ))}
            </div>
        </div>
    );
};

export default UserList;
