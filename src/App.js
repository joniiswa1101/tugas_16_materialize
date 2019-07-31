import React, { Component } from 'react';
import { Slider, Slide,Caption, Card, CardTitle, Row, Col } from 'react-materialize';

class App extends Component {
  render() {
    return(
      <div>
        {
          // <MediaBox >
        // <img src="https://lorempixel.com/350/350/nature/1" caption="A demo media box1" width="350" alt="" />
        // </MediaBox>
        }
        <Slider>
          <Slide
            image={<img src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg" alt="" />}
          >
            <Caption>
              <h3>Pantai</h3>
              <h5>Dapatkan Kesempatan Jalan-Jalan ke Pantai Dengan Membeli Sebuah Product</h5>
            </Caption>
          </Slide>

          <Slide
            image={<img src="https://cdn.pixabay.com/photo/2015/12/08/00/26/cityscape-1081704_960_720.jpg" alt="" />}
          >
          <Caption>
              Dapatkan Kesempatan Jalan-Jalan ke Pantai Dengan Membeli Sebuah Product.
              </Caption>
          </Slide>

          <Slide
            image={<img src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72" alt="" />}
          >
          <Caption>
              Dapatkan Kesempatan Jalan-Jalan ke Pantai Dengan Membeli Sebuah Product.
              </Caption>
          </Slide>
        </Slider>
        <br />
        <h6>Hot List</h6>
        <Row>
          <Col m='3'>
            <Card
              className="small"
              header={<CardTitle image='https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg'>Audio</CardTitle>}
            >
            Audio Technica - Mulai Dari Rp 910ribu
            </Card>
          </Col>
          <Col m='3'>
            <Card
              className="small"
              header={<CardTitle image='https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg'>Handphone</CardTitle>}
            >
            Handphone Samsung - Mulai Dari Rp 200ribu
            </Card>
          </Col>
          <Col m='3'>
            <Card
              className="small"
              header={<CardTitle image='https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg'>Sequishy</CardTitle>}
            >
            Sequishy - Mulai Dari Rp 5,5ribu
            </Card>
          </Col>
          <Col m='3'>
            <Card
              className="small"
              header={<CardTitle image='https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg'>Koleks The Avengers</CardTitle>}
            >
            Koleksi The Avengers - Mulai Dari Rp 10ribu
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default App;
