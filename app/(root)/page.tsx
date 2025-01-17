import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {
 // const loggedIn = await getLoggedInUser();
 const loggedIn = {firstName: 'Victor', lastName: 'Warius', email: 'warius@gmail.com'};

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header ">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage you account and transcactions effortlessly."
          />
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1764.84}
          />
        </header>

        RECENT TRANSACTIONS
      </div>
      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{ currentBalance: 340.60 }, { currentBalance: 340.60 }]}
      />
    </section>
  )
}

export default Home