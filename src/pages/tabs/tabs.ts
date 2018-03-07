import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { ChatPage } from '../chat/chat';
import { PlanningPage } from '../planning/planning';
import { WishlistPage } from '../wishlist/wishlist';
import { BookPage } from '../book/book';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = PlanningPage
  tab3Root = ChatPage;
  tab4Root = BookPage;
  tab5Root = WishlistPage;

  constructor() {

  }
}
