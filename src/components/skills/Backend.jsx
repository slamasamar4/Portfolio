import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend & DevOps</h3>

            <div className="skills__box">

                {/* Group 1 */}
                <div className="skills__group">

                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Node.js</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Express.js</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">MySQL</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                </div>

                {/* Group 2 */}
                <div className="skills__group">

                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">MongoDB</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Docker</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Kubernetes</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                </div>

                {/* Group 3 */}
                <div className="skills__group">

                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">CI/CD (GitHub Actions)</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Backend;
