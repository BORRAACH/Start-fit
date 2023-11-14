import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { Item } from './Item';
import { List } from './List';
import { Route } from 'react-router-dom';

function Store({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}

export default function RouteCard() {
  return (
    <div className="container">
      <AnimateSharedLayout type="crossfade">
        <Route path={['/:id', '/card']} component={Store} />
      </AnimateSharedLayout>
    </div>
  );
}
