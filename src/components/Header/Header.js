import React from 'react'
import './Header.css'
import ShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import { Link } from 'react-router-dom'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { logOutInitiate } from '../../redux/action';

const Header = () => {
  const { user, basket } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const handleAuth = () => {
    if (user) {
      dispatch(logOutInitiate());
    }
  }

  return (
    <nav className='header'>
      <Link to='/'>
        <img className='header-logo' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRYVFRQYGBgaGhwZGBUaGBgcGhkZGRocGhoYGhkcIS4lHR4sIRkZJzgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjYhISE0NDQ/MTY0MTQ0NDU2NDQxNj8/Njg0Nj0/MTY0NDE0NDE9NzQ/NDY3Pz8/MTU0NDE3Mf/AABEIALEBHAMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAABQYHBAMBAgj/xABJEAACAQIBCAYGBwUECwEAAAABAgADEQQFBhIhMUFRcQdhgZGhsRMiMjNysjRCUmJzksEjgsLR0iSis/AUFkNTVGOTo+Hi8Rf/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIEBQMG/8QALREBAAEDAgMHAwUBAAAAAAAAAAECAxEEIQUxQRJCUWFxodFSgZEUIjLB8BP/2gAMAwEAAhEDEQA/AMZiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAnrRpFjZRc/wCdZO4Tykzkyjorpb28t0D5RyQPrMf3f5n+U6VyLTO9u8fynWk/dHEITohlJ4aQvNYEVichMBdG0vunUew7PKRDoQSCCCNoMvSCRGcmCBUVQNYsG6wdQPf5yTArVpK/6vYjdTH5k/UyMp7RzE0+nEQM5xWTqtMhXQgts2G9ttiLzsoZt4lhf0dh95lHhe8vT4NHdHbWU0io3Xa2vstO9BLgZbjclVqPvKZUcdRX8wuOycAE2KrQVlKsAysLEHYRILN/NoUqtRnAKhrU72NwddzyvbmCeEmBSKeSMQwutCqRxCNbynLVpMhsylTvBBB7jNsAnHlbJNPEIVcC9vVa3rIeIP6b5cJljcTpx+FalUem3tIxU9fAjqI19s6ciZMbEVVprv28t/8A9mVRsTZMl5tYaio0aSs323AY9l9kmBSXYFFuQmsJlgcTaMpZt4auCGpKrfbQBWHXcbe28zDOPIT4Wpok6SnWj7NIbwRuI3yTGFyhonthlBZQb2JA1G202mlno/w326vPSX+mMDLomlt0eYfdVq9uh/TPFujynurv2qpjAzqJcctZlehpPVWtpaAuVK2uL2NjfrlOkCJNZMzar1hpKoVftMbDsG2SjZjVQPepfhZvOBUYkllPI1ah7aeruZda9+7tkbARPbD4Z3NkUseAntUyZWXWaTj90wOOJ60aDMbKpbkCZ61cBVUXamwHG38oHLERASWw+PUAA3FgBsuJEz2w+HLmw7TuECSx+OUpoq1ydu3ZvkODJyhklfrEt4CdtLJlIfUHaSfMy4HdgHLIrHaVBPO0+5VW9Cp8N+7XPSggAAAsBqA4T85U9xU+AzQpFL2l5jzmoIJl9H2l5jzmo05IH5x+NWjTao2sDYBtJOoCRWRc6BWqCm6aJb2WDXF9tjq8Z5Z6t+wQcXHgrSqZHa1eif8AmJ8wiZGspPPH45KCGpUNlGoAaySdgA3me6yodIlX1aC7iWY9gUD5jKidyJnHRxDFEDK4F9FwNYG0ggnuk6JlGZrWxlHr0gfyNNYWInJLMc/6QXFXA9qmrHnrX+ESd6NcEAlWsRrLBAeAUBmtzLL+WQ3SL9KX8JfmeRWSsvV8OCtJ7KTcqVDAnZfWNWoDZM9Rs1SoqqzMbKoLMTsAAuSewSkv0iIHstBil/a0wGI46Frdl5D1868ZiKT0RSDFxos1NHLaO8WBI17JFUc2MY2sYeoPiGj4NaWZ8DDYsJiFqItRTdWUMp6jr2bpAZ/4MPg2a3rU2Vx36LeDeAnfmrhHpYWlTqrouoa63Btd2I1gkbCIztH9ixHwHzEs8hjWFcK6E7AwJ5Agzaky7hWtbEUte7TQHuvMPiZiVbumNpsbLURidgDqSewGehlH6P8AIVgcS4161p33bncfKOTS72mkQmd9ULg61za6hR1kkWAmc5r5O9PXVNw9ZupRtPkB1mSefeWfS1fQqfUpkg8GfYT2bO+S3RxhQKdWrbWzBByUXNu1vCZ6qtophQFUWAFgJ5P/AJE9MTVCIznYqljyUXPlMcxOPqPUNVmOmTfSBItwA4AS5Rq+IpK6lHUMp1EHYZmWcGSzh6pUew3rIergesTRMjYs1qFOodpX1viHqt4gyIz0wmlQ07a0IbsOo+YPZEqruZo/bt+G3zLLi4lOzL9+34bfMsuTxAi8DghSQINZ2luJ/lPtQSPytl30b6CqGI9ok2tfXYTqoYgVFV12EbOB2Ed8or2XMGFIdRYE2I3X4yHlpy0t6TdVj4yrTMhJ7BUtFQO/nISiPWXmPOWGmIgezVAqlibASNfLjX9VVA67k+E9crk+j/eF/GQarfUJZkXjA1CyKx2soJt1ifcqe4qfAZ8wSaKIvBQO4T9ZSW9GoB9g+AlFIoe0vxDzmooJl1D2l+Iec1JZIFfz39ynx/wmVXJHv6P4ifMJas9/dJ8f8JlVyR7+j+InzCSeY1xZTOkXbh+T/wAEuaymdIu3D8n/AIJZ5IhszfplHm3+G01lZk2Zn02jzb/Daa0sQSzPpE+lD8NfmaMzMgLiHLOLoliRuudgPEm2zhHSJ9KH4a+bS55i4QJg6Ztrcs7ddzZf7oWMbifw1BEUIihVGxVFhPtWuiC7uqDizADxnhlLFeio1Ktr6CM4HEgEgHttMTxmMeq5eoxZjtJPgBuHUJZnA3ejUVwGRgynYykEHkRIvO76FiPgPmJ5Zkro4GgD9lj3uxHnPTO/6FiPg/UR0GJyWzdyW2IrJTGoHWzfZUe03Zu6yJFopJAE17MvIv8Ao9EOwtUqAE8VXaq89559UzEKnaNFURURQFUBVXgALASAzwyyMNQOibVHuqcR9p+wHvIlhdgASdQGsnqExnObK5xNdn16I9VBwUb+Z29vVLKIYmarmMlsGh4s5/vkfpMqmq5i1L4JB9lnH94n9ZIV25wfRsR+E/ymY7Nmy0mlh66jaabgc9AzGYkaPmS98KBwdx5H9ZI5Xp6VGqvFG+UyJzE+jt+I3yrJnHNZHJ+y3kZeiKLmX79vwz8yy4PKfmX75vwz8yy4PEclZvlBr1ah4u3mZYcgH9iPiMreK94/xN5mWPIHuf3m/SSB+sr+6bl+olUlqyv7puX6iVWJH6RrEHgbyw0WuARvlcnfgsdo6m1ru4j/AMRAm3phlKkXBn4weTUU6QBJ3EnZyE/FPHU/tjt1T5XyuijUdI8Bs7Sf0l2E0k6FlQwGV2WoWckq2phw4EDqkplTLaqujSYMxHtDWFH6mMiFxeHCYgouwMtuRsbeM0VZl9Kp64ZiT6wJO0nXcmaJSylQOysn518ogRefHuqfx/wmVbI/0ih+KnziWLPHFoyU1R1Y6RNlINha2u2zbK5ktwtakzEACopJOwAMCSZJGvLKX0i7cPyfzWXFKqnYwPaJTOkKqpagAQSA5IB2XK28j3SyiJzKH9spfvfI01pZk2ZbAYylf7w7SjTWREDMekP6UPw182l8zRqhsHhyNy6PapKnylD6Qj/a+VNP1kp0e5cVb4aoQLtpUyTqufaTqvtHbHUXnKmE9LRqUr200ZQeBI1HvtMxyfmVinYq6ejUGxdrW5rb2v8APZrAn28TA/OEoLTRUUWVFCqOpRYTyytg/TUalK9tNGUHgSNR77SLwOdNCpiTh0N7Ldalxou49pV46td99j1Xk8p5Qp0KbVKjWUd5O5VG8mBkua2BJx1OlUW1nbTU8aYLFT2rabI0yzN/KH+kZUWtohdMuQvC1Mga95sJouUsrUKAvVqqm8KTdjyUaz3RA6zOPF4ClUFnpo4+8oMgqufeDBsDUbrCavEidGEztwlQ2FXRPBwV8Tq8YyK9nLmbTVGrUCV0AWamSSCBrOidoNt0/fRvigUrUt4YOOsMNE92ivfLVldgcPWINx6N7EbD6hmUZvZSOHrrU3eyw4q23u1Hsk5K1yooIIOwix7Zi+Lwxpu6NtVip7DtmypVVlDKQVYXVhsIOwicOIyZRd/SPTVm2XI19vGWYRF5p4cphkuLFrv2MdXgBPTOPEaGHqtxUqOber+slWlHz1ymGYUFNwp0n+LcvYL98SOTMz3z/hn5llucyo5m+9f8M/MstrmI5KzfFe2/xN5mWLIPuR8RlcxXtv8AE3mZYshe5HxGSB+srn9m/IeYlWlmysf2b9nmJWYkIiJAiIgfTO3JOHR6qI7FVZgCwIFr79YnFAMTGYmI2aicTEzuteX8z6lG70r1E3i3rrzUbR1juEqlpfc0M6/ZoV26kqHwVj5Hvk7lvNOhXuw/Z1D9ZQLE/eXYeYsZ5ka2qxX/AM9RHpMdXfOlpvU9uzP2ZLPknMs5t18Pcuukv+8XWvbvHbaQc9GiumuO1TOYcFVFVE4qjEkRE0y/Skg3GrhOlcpVhsrVBydv5zkiB6VarMSzMWJ2kkknmTPOIgTeEzpxlMBVrtYbAwVrdrAmeOPzhxVYaNSuxU7VFlB5hQL9siogelNypDAkEEEEaiCNYIPGd2Vcs18QVNZy2iLAWAA4mw1XPGRsQOvAUqrOoohi97roX0geNxs5y34To9xdb161RULazpEsxPXbV4yCzXy6cJVD6Okn1kFgW1EDXbcTe3VLbU6UT9XCi3XU/QLPP1lesiezYpjHjn5dNqmzjNc7+AOi3ji/+z/7ziyh0aV0BNKqlS31SCjHqFyRfmRO2j0nm/rYUW3lahv4rrl+wGMWtSSqtwrqGAO0A7j1zy7uq4hp8VXeU+UY9nTRa09zalhC5Qr0legHZVN1ZDu3MLH2d97SPklnGwOKxBGw1qnzmRk/R0zmImXn1RiZhP5CzlqYf1SNOn9kmxXiVO7lslmTPTDkXIqKeGiD4gzOomssrdlbPEsCtBSt9rtbS7ALgHruZU2Yk3JuTtM/MSCTyHlEUHLMCQVKm1r7Qd/KTjZz0T9Wp3L/AFSoRLkfuq12J4knvMl8l5RRE0WJBuTsJ28pCxIJvKGUEZCqm5PURv65CREuQiIkCIiAiIgfZcc187zRtSr3ansVtrJ1feXq2jdwlNifO7Zou09muMw+lq7VbqzTOG+YesrqGVgysNRBuCJC5UzOwta7BPROfrJYA809nuseuZpkTL1bDNem3qk+sja1bmNx6xrml5Bzuw+IspPo6n2GIsT91th5aj1T8/e0eo0lXbtTM0+X9w9ajUWb8dmuMT5qdlLo/wASlzTK1l+6dFvynV3EysYvBVKZtUpsh4MpHnN9EPTVhouoYcGAI7jFrjVyna5TE+0sXNBRP8Jw/nmJt+LzQwVT2qCqeKEr4A28JD1+jbDH2KtVOeiwHgD4zvo4zpqueY+3w5KtFcjluyiJo79F53YodtIjyaeP/wCX1f8AiE/K385944npJ7/tPw+f6a74M9iaMnRc31sSo5UyfNhJHD9GWHFtOvUb4Qqg94aZq4rpI72fSJ+CNLdnoyidWEwNSqdGnTdzwVSfKbPgsy8DT1iiHPFyzeBOj4Sdo0VQaKKqjgoAHcJxXeOW4/hTM+uz7UaKrvThk+SejvE1NdUrRXgfWb8oNh2mXnJWZmDoD3YqtvaoA3cpFh2CTeNxtOkpeo6oo2sxsOXWeqZxnN0gs96eFuq7DWOpz8I+qOs6+U5aLut11WKZ7NPltH5feabFiMzvLk6SUwwq01oqiuAfShAABs0QQNWl7XXa3VNCwVsNg10v9lRBbmq3PjeZBmtgTiMXSQ3ILaTHbqX1jfna3bL50mZXCURh1Pr1LFwNyKb9mkwHYpnVqrM1VWtLEzON5ny/2XztV4iu7MY8GWVahZix1kkknrJuZ5xE915xERAREQEREBERAREQEREBERAREQEREBERAsWR87cTQsA+mg+o9yAOAO0d9uqXbJfSFh3sKytSbj7S941+Eyi8Tjv6Cxe3qpxPjGzot6q5RtE5h/QOCylRqi9Kqj/CwJ7RtE7BP5zvJLC5wYqn7GIqjq02I7ibTy7nAo7lf5h1U6/6ob4DPsxJM+MeP9uTzSmfNZ6f6+4//fL/ANOn/TOaeB3/AKo9/hv9db8JbVeGNtZ1dcw6rnnjm24lh8IRflAkVico1qnvKrv8TM3mZ9KOBV96uI9N/hmddT0htuUc6MHQvp1lJH1UOk3ct7dsp2V+ko61w1K336ms9ij9T2TOLz5eejY4Rp7e8/unz5fhzV6y5Vy2d+Ucp1q7aVaozndc6h1ADUByE4J9iepFMRGIjEQ5pmZnMp/NPLy4Oo1Q09MlCq67WYkG/LVaRuVMoPiKjVahuzG/UBuAG4CcUTEW6YrmvG87ZamuqaYpztD5ERNsEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//Z' alt='logo' />
      </Link>

      <div className='header-option' style={{ marginRight: '-10px' }}>
        <LocationOnOutlinedIcon />
      </div>

      <div className='header-option'>
        <span className='header-option1'>Hello</span>
        <span className='header-option2'>Select Your address</span>
      </div>

      <div className='search'>
        <select>
          <option>All</option>
        </select>
        <input type='text' className='searchInput' />
        <SearchOutlinedIcon className='searchIcon' />
      </div>

      <div className='header-nav'>
        <Link to={user?'/' : '/login'} className='header-Link'>
          <div onClick={handleAuth} className='header-option'>
            <span className='header-option1'>Hello, {user? user.email : "Guest"}{" "}</span>
            <span className='header- option2'>{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        <Link to='/orders' className='header-Link'>
          <div className='header-option'>
            <span className='header-option1'>Returns</span>
            <span className='header- option2'>& Orders</span>
          </div>
        </Link>
        <Link to='/' className='header-Link'>
          <div className='header-option'>
            <span className='header-option1'>Your</span>
            <span className='header- option2'>Prime</span>
          </div>
        </Link>
        <Link to='/checkout' className='header-Link'>
          <div className='header-basket'>
            <ShoppingCartOutlinedIcon />
            <span className='header-option2 basket-count'>{basket && basket.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header

