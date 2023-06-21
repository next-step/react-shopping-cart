import * as stories from './CartPage.stories';
import { screen, waitFor } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import { render } from 'test/rtkProvider';
import { setupServer } from 'msw/node';

import { handlers } from './mockserver';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

const { Default } = composeStories(stories);

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('장바구니 체크박스 테스트', () => {
  test('장바구니에서 첫번쨰 아이템을 선택하면 주문하기 1개,결제 예상 금액은 83700원이 된다.', async () => {
    render(<Default />);
    await waitFor(
      () => {
        const checkboxs = screen.getAllByRole('checkbox');
        expect(checkboxs).toHaveLength(3);
      },
      { timeout: 3000 }
    );

    const checkboxs = screen.getAllByRole('checkbox');
    const firstcheckBox = checkboxs[1];
    await userEvent.click(firstcheckBox);

    await waitFor(() => {
      const orderButton = screen.getByRole('button', { name: '주문하기 1개' });
      expect(orderButton).toBeInTheDocument();
    });

    const paymentPrice = screen.getByTestId('payment-price');

    expect(paymentPrice).toHaveTextContent('83700원');
  });

  test('장바구니에서 두번쨰 아이템을 선택하면 주문하기 2개,결제 예상 금액은 112700원이 된다.', async () => {
    render(<Default />);
    await waitFor(
      () => {
        const checkboxs = screen.getAllByRole('checkbox');
        expect(checkboxs).toHaveLength(3);
      },
      { timeout: 3000 }
    );

    const checkboxs = screen.getAllByRole('checkbox');
    const secondCheckBox = checkboxs[2];
    await userEvent.click(secondCheckBox);

    await waitFor(() => {
      const orderButton = screen.getByRole('button', { name: '주문하기 2개' });
      expect(orderButton).toBeInTheDocument();
    });

    const paymentPrice = screen.getByTestId('payment-price');
    expect(paymentPrice).toHaveTextContent('112700원');
  });

  test('장바구니에서 두번째 아이템을 해제하면 주문하기 1개,결제 예상 금액은 83700원이 된다.', async () => {
    render(<Default />);

    await waitFor(
      () => {
        const checkboxs = screen.getAllByRole('checkbox');
        expect(checkboxs).toHaveLength(3);
      },
      { timeout: 3000 }
    );
    const checkboxs = screen.getAllByRole('checkbox');
    const secondCheckBox = checkboxs[2];
    await userEvent.click(secondCheckBox);

    await waitFor(() => {
      const orderButton = screen.getByRole('button', { name: '주문하기 1개' });
      expect(orderButton).toBeInTheDocument();
    });

    const paymentPrice = screen.getByTestId('payment-price');
    expect(paymentPrice).toHaveTextContent('83700원');
  });
  test('장바구니에서 첫번쨰 아이템을 해제하면 주문하기 0개,결제 예상 금액은 0원이 된다.', async () => {
    render(<Default />);

    await waitFor(
      () => {
        const checkboxs = screen.getAllByRole('checkbox');
        expect(checkboxs).toHaveLength(3);
      },
      { timeout: 3000 }
    );
    const checkboxs = screen.getAllByRole('checkbox');
    const firstCheckBox = checkboxs[1];
    await userEvent.click(firstCheckBox);

    await waitFor(() => {
      const orderButton = screen.getByRole('button', { name: '주문하기 0개' });
      expect(orderButton).toBeInTheDocument();
    });

    const paymentPrice = screen.getByTestId('payment-price');
    expect(paymentPrice).toHaveTextContent('0원');
  });

  test('장바구니에서 두번째 아이템을 선택하면 주문하기 1개,결제 예상 금액은 29000원이 된다.', async () => {
    render(<Default />);

    await waitFor(
      () => {
        const checkboxs = screen.getAllByRole('checkbox');
        expect(checkboxs).toHaveLength(3);
      },
      { timeout: 3000 }
    );
    const checkboxs = screen.getAllByRole('checkbox');
    const secondCheckBox = checkboxs[2];
    await userEvent.click(secondCheckBox);

    await waitFor(() => {
      const orderButton = screen.getByRole('button', { name: '주문하기 1개' });
      expect(orderButton).toBeInTheDocument();
    });

    const paymentPrice = screen.getByTestId('payment-price');
    expect(paymentPrice).toHaveTextContent('29000원');
  });
});

describe('모두 선택 체크 박스 테스트', () => {
  test('모두선택 체크 박스를 누르면 주문하기 2개, 112700원이 된다.', async () => {
    render(<Default />);

    await waitFor(
      () => {
        const checkboxs = screen.getAllByRole('checkbox');
        expect(checkboxs).toHaveLength(3);
      },
      { timeout: 3000 }
    );

    const checkboxs = screen.getAllByRole('checkbox');
    const allcheckBox = checkboxs[0];
    await userEvent.click(allcheckBox);

    await waitFor(() => {
      const orderButton = screen.getByRole('button', { name: '주문하기 2개' });
      expect(orderButton).toBeInTheDocument();
    });

    const paymentPrice = screen.getByTestId('payment-price');
    expect(paymentPrice).toHaveTextContent('112700원');
  });

  test('모두선택 체크 박스를 두번누르면 주문하기 0개, 결제예상금액은 0원이 된다.', async () => {
    render(<Default />);

    await waitFor(
      () => {
        const checkboxs = screen.getAllByRole('checkbox');
        expect(checkboxs).toHaveLength(3);
      },
      { timeout: 3000 }
    );

    const checkboxs = screen.getAllByRole('checkbox');
    const allcheckBox = checkboxs[0];
    await userEvent.click(allcheckBox);
    await userEvent.click(allcheckBox);

    await waitFor(() => {
      const orderButton = screen.getByRole('button', { name: '주문하기 0개' });
      expect(orderButton).toBeInTheDocument();
    });
    const paymentPrice = screen.getByTestId('payment-price');
    expect(paymentPrice).toHaveTextContent('0원');
  });
});

describe('주문하기 버튼 테스트', () => {
  test('체크된 아이템이 존재하지 않으면 주문하기 버튼은 비활성화 된다.', async () => {
    render(<Default />);

    const orderButton = await screen.findByRole('button', { name: '주문하기 0개' });
    expect(orderButton).toBeDisabled();
  });

  test('체크된 아이템이 존재하면 주문하기 버튼은 활성화 된다.', async () => {
    render(<Default />);

    await waitFor(() => {
      const checkboxs = screen.getAllByRole('checkbox');
      expect(checkboxs).toHaveLength(3);
    });

    const checkboxs = screen.getAllByRole('checkbox');
    const firstCheckbox = checkboxs[1];
    await userEvent.click(firstCheckbox);

    const orderButton = await screen.findByRole('button', { name: '주문하기 1개' });
    expect(orderButton).toBeEnabled();
  });
});

describe('주문하기 버튼 기능 테스트', () => {
  test('버튼을 누르면 주문 하시겠습니까? 를 가진 dialog가 나타난다.', async () => {
    render(<Default />);

    await waitFor(() => {
      const checkboxs = screen.getAllByRole('checkbox');
      expect(checkboxs).toHaveLength(3);
    });

    const checkboxs = screen.getAllByRole('checkbox');
    const firstCheckbox = checkboxs[1];
    await userEvent.click(firstCheckbox);

    const orderButton = await screen.findByRole('button', { name: '주문하기 1개' });
    await userEvent.click(orderButton);

    await waitFor(() => {
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveTextContent('주문 하시겠습니까?');
    });
  });
  test('주문하시겠습니까의 확인을 누르면 useNavigate는 /order를 호출한다.', async () => {
    render(<Default />);

    await waitFor(() => {
      const checkboxs = screen.getAllByRole('checkbox');
      expect(checkboxs).toHaveLength(3);
    });

    const checkboxs = screen.getAllByRole('checkbox');
    const firstCheckbox = checkboxs[1];
    await userEvent.click(firstCheckbox);

    const orderButton = await screen.findByRole('button', { name: '주문하기 1개' });
    await userEvent.click(orderButton);

    const confirmButton = await screen.findByRole('button', { name: '확인' });
    await userEvent.click(confirmButton);

    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalledWith('/order');
    });
  });

  test('주문하시겠습니까의 취소를 누르면 dialog는 닫힌다.', async () => {
    render(<Default />);

    await waitFor(() => {
      const checkboxs = screen.getAllByRole('checkbox');
      expect(checkboxs).toHaveLength(3);
    });

    const checkboxs = screen.getAllByRole('checkbox');
    const firstCheckbox = checkboxs[1];
    await userEvent.click(firstCheckbox);

    const orderButton = await screen.findByRole('button', { name: '주문하기 1개' });
    await userEvent.click(orderButton);

    const cancleButton = await screen.findByRole('button', { name: '취소' });
    const dialog = screen.getByRole('dialog');

    await userEvent.click(cancleButton);

    expect(dialog).not.toBeInTheDocument();
  });
});

describe('장바구니 아이템 삭제 테스트', () => {
  test('체크된 모든 아이템 들을 삭제 버튼 누른뒤 확인을 누르면, 장바구니의 체크된 모든 아이템들이 사라진다.', async () => {
    render(<Default />);

    await waitFor(() => {
      const checkboxs = screen.getAllByRole('checkbox');
      expect(checkboxs).toHaveLength(3);
    });

    const checkboxs = screen.getAllByRole('checkbox');
    const allcheckbox = checkboxs[0];

    // 1. 모두 선택 체크박스 클릭
    await userEvent.click(allcheckbox);
    expect(allcheckbox).toBeChecked();

    await waitFor(() => {
      const cartItem = screen.getAllByTestId('cart-item');
      expect(cartItem).toHaveLength(2);
    });

    const cartRemoveButton = screen.getByRole('button', { name: 'trash.svg' });
    await userEvent.click(cartRemoveButton);

    const confirmButton = screen.getByRole('button', { name: '확인' });
    await userEvent.click(confirmButton);

    const orderButton = await screen.findByRole('button', { name: '주문하기 0개' });
    // const cartItem = await screen.findByTestId('cart-item');
    // expect(cartItem).toBeInTheDocument();
    expect(orderButton).toHaveTextContent('123');
  });
});
