import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-floor-plans',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './floor-plans.html',
    styleUrls: ['./floor-plans.scss']
})
export class FloorPlansComponent {
    floorPlans = [
        {
            title: '2 BHK Luxury Apartment',
            image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&q=80&w=800',
            pdf: 'assets/floorplans/plan1.pdf'
        },
        {
            title: '3 BHK Premium Residence',
            image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800',
            pdf: 'assets/floorplans/plan2.pdf'
        },
        {
            title: 'Exclusive Penthouse',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
            pdf: 'assets/floorplans/plan3.pdf'
        }
    ];
}
