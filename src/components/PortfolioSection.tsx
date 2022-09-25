import { Modal } from "./Modal";
import { Card } from "./Card";

export const PortfolioSection = () => {
  return (
    <div>
      <Modal
        title="mylo's portfolio"
        modalID={1}
        description="test1"
        description2="test2"
        description3="test3"
        image="./images/portfolio.png"
        link="https://whatshouldieat.netlify.app/"
      >
        <Card
          title="test"
          image="./portfolio.png"
          href="https://github.com/miloapadma/whatshouldieat"
          body="test"
        />
      </Modal>
      <Modal
        title="whatshouldieat"
        modalID={2}
        description="test1"
        description2="test2"
        description3="test3"
        image="./images/whatshouldieat.png"
        link="https://whatshouldieat.netlify.app/"
      >
        <Card
          title="test"
          image="./whatshouldieat.png"
          href="https://github.com/miloapadma/whatshouldieat"
          body="test"
        />
      </Modal>
    </div>
  );
};
