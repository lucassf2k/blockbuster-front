import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Welcome } from '../pages/Welcome';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { NotFound } from '../pages/NotFound';
import { MyList } from '../pages/MyList';
import { Cart } from '../pages/Cart';

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Welcome />} />
				<Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/mylist' element={<MyList />} />
        <Route path='/cart' element={<Cart />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
