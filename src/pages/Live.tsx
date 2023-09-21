import PageTemplate from "../components/PageTemplate"

export default function LivePage() {
    return (
        <PageTemplate title='Live'>
            <div className="grid grid-cols-2 gap-2 pointer-events-none">
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