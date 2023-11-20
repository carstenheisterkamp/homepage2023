import PageTemplate from "../components/PageTemplate"

export default function AboutPage() {
    return (
        <PageTemplate title='About' subtitle='Subtitle' intro='Intro'>
            <div className="grid grid-cols-2 gap-2 pointer-events-none">
                <p className="text-2xl">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <div>
                    <p>Content!</p>
                </div>
                <div>
                    <p>Content!</p>
                </div>
                <div>
                    <p>Content!</p>
                </div>
                <div>
                    <p>Content!</p>
                </div>
            </div>
        </PageTemplate>
    )
}