import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, ButtonGroup, Carousel } from "react-bootstrap";
import Loaders from "../utilities/loaders"

const Collection = () => {
    const [datas, setDatas] = useState([])
    const [limit, setLimit] = useState(5)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // aturan fetch data harus di cancel bolak-balik
        let isCanceled = false

        if (isCanceled === false) {
            setLoading(true)
            axios({
                method: "GET",
                url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`
            }).then((result) => setDatas(result.data)).catch((err) => console.log(err)).finally(() => setLoading(false))
        }

        // clean up render
        return () => { isCanceled = true }
    }, [limit])

    const handleLimit = (option) => {
        option === "+" ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1)

        // if (option === "+") {
        //     setLimit((prev) => prev + 1)
        // } else {
        //     setLimit((prev) => prev - 1)
        // }
    }

    if (loading) return <Loaders/>

    return (
      <React.Fragment>
        <h4>{limit} Collection</h4>
            <Carousel>
                {/* Carousel items */}
                {datas.map((data, i) => {
                    return (
                    <Carousel.Item key={i}>
                        <img className="d-block w-100" src={data.url} alt="First slide" style={{height: 500}} />

                        <Carousel.Caption>
                            <h3>{data.title}</h3>
                            <p>{data.thumbnailUrl}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    )
                })}
            </Carousel>

            <ButtonGroup className="mt-4 d-flex gap-2 justify-content-center">
                <Button className="rounded-3" variant="outline-primary" onClick={() => handleLimit("+")}>+</Button>
                <Button className="rounded-3" variant="outline-primary" onClick={() => handleLimit("-")}>-</Button>
            </ButtonGroup>
      </React.Fragment>
    );
}

export default Collection