import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  toggleDropdown(event: Event) {
    event.preventDefault();
    const dropdown = document.getElementById('navbarDropdownMenuLink');
    if (dropdown) {
      dropdown.classList.toggle('show');
      const dropdownMenu = document.querySelector('.dropdown-menu');
      if (dropdownMenu) {
        dropdownMenu.classList.toggle('show');
      }
    }
  }

  router = inject(Router);

  onLogOff(){
    localStorage.removeItem("angular19User");
    this.router.navigateByUrl("login")
  }

}
