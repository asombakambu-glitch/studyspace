import React, { useEffect, useState } from 'react'

const Cart = () => {

    const [cart, setCart] = useState([])

    useEffect(() => {

        const savedCart =
            JSON.parse(localStorage.getItem("cart")) || []

        setCart(savedCart)

    }, [])

    return (

        <div className="container mt-4">

            <div className="text-center mb-5">

                <p className="soft-label">
                    Your Space
                </p>

                <h1>
                    Study Collection ♡
                </h1>

                <p className="muted-text">
                    Saved study materials for later.
                </p>

            </div>


            {cart.length > 0 && (
                <div className="text-center mb-4">


                    <button
                        className="btn btn-whimsy"
                        onClick={() => {
                            localStorage.removeItem("cart")
                            setCart([])
                        }}
                    >

                        
                        Clear Collection ♡
                    </button>
                </div>
            )}

            <div className="row">

                {cart.length > 0 ? (

                    cart.map((item, index) => (

                        <div className="col-md-4 mb-4" key={index}>

                            <div className="card h-100">

                                <div className="card-body p-4">

                                    <p className="soft-label">
                                        Saved Notes
                                    </p>

                                    <h4>
                                        {item.user_name}
                                    </h4>

                                    <p className="muted-text">
                                        {item.description}
                                    </p>

                                    <h5
                                        style={{
                                            color: "var(--accent-dark)"
                                        }}
                                    >
                                        Ksh {item.price}
                                    </h5>


                                    <button
                                        className="btn btn-whimsy w-100 mt-3"
                                        onClick={() => {

                                            const updatedCart =
                                                cart.filter((_, i) => i !== index)

                                            setCart(updatedCart)

                                            localStorage.setItem(
                                                "cart",
                                                JSON.stringify(updatedCart)
                                            )

                                        }}
                                    >
                                        Remove ♡
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))

                ) : (

                    <div className="text-center mt-5">

                        <h3>
                            Your collection is empty ✨
                        </h3>

                        <p className="muted-text">
                            Save notes to revisit them later.
                        </p>

                    </div>

                )}

            </div>

        </div>
    )
}

export default Cart