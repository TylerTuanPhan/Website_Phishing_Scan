import styled from "styled-components";

// Định nghĩa các styled-components
const Container = styled.div`
  text-align: center;
  background-color: #1a1a2e;
  color: #d3d3d3;
  padding: 2rem;
  width: 60%;
  margin: 0 auto;
`;

const Icon = styled.div`
  font-size: 4rem;
  color: #87cefa;
  margin-bottom: 1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const TextField = styled.input`
  width: 70%;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px 0 0 5px;
  border: 1px solid #444;
  background-color: #2e2e4d;
  color: #d3d3d3;
  outline: none;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #b0b0c3;
  line-height: 1.5;
`;

const Link = styled.a`
  color: #87cefa;
  text-decoration: none;
`;

const PushableButton = styled.button`
  position: relative;
  background: transparent;
  6px 12px; /* Giảm padding của button */
  border: none;
  cursor: pointer;
  outline-offset: 4px;
  outline-color: deeppink;
  transition: filter 250ms;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: hsl(226, 25%, 69%);
    border-radius: 8px;
    filter: blur(2px);
    will-change: transform;
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  .edge {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 8px;
    background: linear-gradient(
      to right,
      hsl(248, 39%, 39%) 0%,
      hsl(248, 39%, 49%) 8%,
      hsl(248, 39%, 39%) 92%,
      hsl(248, 39%, 29%) 100%
    );
  }

  .front {
    display: block;
    position: relative;
    border-radius: 8px;
    background: hsl(248, 53%, 58%);
    padding: 16px 32px;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 1rem;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  &:hover {
    filter: brightness(110%);
  }

  &:hover .front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  &:hover .shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:active .shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

const URLs = () => {
  return (
    <Container>
      <Icon>
        <i className="fas fa-globe"></i> {/* Biểu tượng icon */}
      </Icon>
      <InputWrapper>
        <TextField type="text" placeholder="Search or scan a URL" />
        <PushableButton>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front"> Scan </span>
        </PushableButton>
      </InputWrapper>
      <Description>
        By submitting data above, you are agreeing to our{" "}
        <Link href="#">Terms of Service</Link> and{" "}
        <Link href="#">Privacy Notice</Link>, and to the{" "}
        <strong>sharing of your URL submission</strong> with the security
        community. Please do not submit any personal information; we are not
        responsible for the contents of your submission.{" "}
        <Link href="#">Learn more.</Link>
      </Description>
    </Container>
  );
};

export default URLs;
