// styles
import { Button } from "./components/atoms/Button"
import { BackBlue, BackRed, Row, Col } from "./styles/AppStyles"
import GlobalStyle from "./styles/global-style"

function App() {
  return (
    <>
      {/* <Row gap={1} margin="1rem auto">
        <Col col={{ xs: 6, sm: 4, md: 6 }} height="250px" gap={1}>
          <BackRed>
            Hello
          </BackRed>
        </Col>
        <Col col={{ xs: 6, sm: 4, md: 6 }} height="250px" gap={1}>
          <BackBlue>
            blue
          </BackBlue>
        </Col>
        <Col col={{ xs: 12, sm: 4, md: 12 }} gap={1}>
          <Row gap={1}>
            <Col col={{ xs: 6, sm: 8, md: 6 }} height="250px" gap={1}>TEXTAO</Col>
            <Col col={{ xs: 6, sm: 4, md: 6 }} height="250px" gap={1}>TEXTAO DOIS</Col>
          </Row>
        </Col>
      </Row > */}

      <Row gap={2}>
        <Col col={6} height='500px'>
          <BackRed>
            <Button>Continuar</Button>
          </BackRed>
        </Col>
        <Col col={6} height='500px'>
          <BackBlue>
          </BackBlue>
        </Col>
      </Row>

      {/* // example 12 */}
      {/* <Row>
        <Col col={1}>
          <BackRed>
            Hello
          </BackRed>
        </Col>
        <Col col={1}>
          <BackBlue>
            blue
          </BackBlue>
        </Col>
        <Col col={1}>
          <BackBlue>
            blue
          </BackBlue>
        </Col>
        <Col col={1}>
          <BackRed>
            Hello
          </BackRed>
        </Col>
        <Col col={1}>
          <BackRed>
            Hello
          </BackRed>
        </Col>
        <Col col={1}>
          <BackBlue>
            blue
          </BackBlue>
        </Col>
        <Col col={1}>
          <BackBlue>
            blue
          </BackBlue>
        </Col>
        <Col col={1}>
          <BackRed>
            Hello
          </BackRed>
        </Col>
        <Col col={1}>
          <BackRed>
            Hello
          </BackRed>
        </Col>
        <Col col={1}>
          <BackBlue>
            blue
          </BackBlue>
        </Col>
        <Col col={1}>
          <BackBlue>
            blue
          </BackBlue>
        </Col>
        <Col col={1}>
          <BackRed>
            Hello
          </BackRed>
        </Col>
      </Row> */}

      < GlobalStyle />
    </>
  )
}

export default App
