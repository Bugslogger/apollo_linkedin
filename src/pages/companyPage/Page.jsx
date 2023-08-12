import React from "react";
import { Card } from "../../components/Index";
import Card2 from "../../components/Card/Card2";
import Card3 from "../../components/Card/Card3";

const Page = () => {
    return (
        <div
            style={{ maxWidth: "1265px" }}
            className="mx-auto w-100 flex py-3 px-2"
        >
            <div
                className="flex flex-column justify-content-center align-items-center"
                style={{ width: "calc(100% - 385px)" }}
            >
                <Card2 />
                <Card />
                <Card3 />
            </div>
            <div className="" style={{ width: "385px" }}>
                <div
                    style={{ width: "96%" }}
                    class=" mx-auto shadow accordion accordion-flush"
                    id="accordionFlushExample"
                >
                    <div class="rounded accordion-item">
                        <h2 class="accordion-header">
                            <button
                                class="accordion-button py-3 collapsed fw-500"
                                type="button"
                            >
                                Signals & communication advice
                            </button>
                        </h2>
                        <div
                            id="flush-collapseOne"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div class="accordion-body">
                                Placeholder content for this accordion, which is intended to
                                demonstrate the <code>.accordion-flush</code> class. This is the
                                first item's accordion body.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
