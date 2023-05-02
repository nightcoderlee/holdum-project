import './App.css';
import Customer from './components/Customer';

const customers = [
{
  'id' : 1,
  'name': '닉네임1',
  'todaymoney': '총이용금액 100,000KRW',
  'allmoney': '오늘 이용 금액 200,000KRW',
  'nowmoney': '현재 바이인 금액 50,000KRW'
},
{
  'id' : 2,
  'name': '닉네임2',
  'todaymoney': '총이용금액 1,000,000KRW',
  'allmoney': '오늘 이용 금액 200,000KRW',
  'nowmoney': '현재 바이인 금액 50,000KRW'
},
{
  'id' : 3,
  'name': '닉네임3',
  'todaymoney': '총이용금액 200,000KRW',
  'allmoney': '오늘 이용 금액 200,000KRW',
  'nowmoney': '현재 바이인 금액 30,000KRW'
}
]

function App() {
  return (
    <div>
{
  customers.map(c => {
    return (
      <Customer
      key={c.id}
      id={c. id}
      name={c. name}
      todaymoney={c. todaymoney}
      allmoney={c. allmoney}
      nowmoney={c. nowmoney}
      />
    )
  })
}
    </div>
  );
}

export default App;
