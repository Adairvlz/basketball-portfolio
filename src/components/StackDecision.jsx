function StackDecision() {
    return (
        <section className="section stack-decision" id="stack">
            <div className="section-heading">
                <p className="eyebrow">Game Plan</p>
                <h2>Por qué escogí este stack</h2>
            </div>

            <div className="decision-grid">
                <article className="decision-card large">
                    <span>01</span>
                    <h3>React + Vite para interfaces modernas</h3>
                    <p>
                        Escogí React porque permite construir interfaces reutilizables por
                        medio de componentes, manejar estado de forma clara y desarrollar
                        aplicaciones tipo SPA. Vite lo utilicé porque ofrece un entorno de
                        desarrollo rápido, simple de configurar y adecuado para proyectos
                        modernos de front-end.
                    </p>
                </article>

                <article className="decision-card">
                    <span>02</span>
                    <h3>APIs REST para separar responsabilidades</h3>
                    <p>
                        En los proyectos full-stack utilicé APIs REST para separar el
                        front-end del back-end. Esto permite que la interfaz consuma datos
                        desde servicios externos o propios de manera ordenada.
                    </p>
                </article>

                <article className="decision-card">
                    <span>03</span>
                    <h3>Docker para entornos consistentes</h3>
                    <p>
                        Docker permite levantar bases de datos, back-end y front-end en
                        contenedores, evitando problemas de configuración entre diferentes
                        computadoras o ambientes.
                    </p>
                </article>

                <article className="decision-card">
                    <span>04</span>
                    <h3>GitHub para control y documentación</h3>
                    <p>
                        Utilicé Git y GitHub para organizar versiones, trabajar con commits
                        descriptivos y mantener repositorios públicos con instrucciones de
                        instalación, uso y ejecución.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default StackDecision;