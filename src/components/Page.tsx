import dot from '../assets/dot.gif'

export default function Page() {
  return (
    <section className="page-section" data-testid="page-section">
      <h1>this is shoplist.</h1>
      <h2>shop till you drop.</h2>
      <img src={dot} alt="dot gif" />
    </section>
  )
}
