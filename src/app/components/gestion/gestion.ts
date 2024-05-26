import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router";
import { Page } from "@nativescript/core";
import { SegmentedBar, SegmentedBarItem, SelectedIndexChangedEventData } from "@nativescript/core/ui/segmented-bar";

@Component({
    selector: 'gestion',
    templateUrl: './gestion.html',
    styleUrls: ['./gestion.css']
})

export class GestionComponent implements OnInit {
    mySegmentedBarItems: Array<SegmentedBarItem> = [];
    items = ['Productos', 'Crear Productos']
    ver_item0: boolean = true;
    ver_item1: boolean = false;
    public constructor(private router: Router, private page: Page) {
        for (let i = 0; i < 2; i++) {
            const item = new SegmentedBarItem();
            item.title = this.items[i];
            this.mySegmentedBarItems.push(item);
        }
    }
    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }
    public onTap() {
        this.router.navigate(["landing"]);
    }
    public perfil() {
        this.router.navigate(["verperfil"])
    }
    public productos() {
        this.router.navigate(["productos"])
    }
    public cerrar_sesion() {
        this.router.navigate(["login"])
    }
    public onSelectedIndexChange(args: SelectedIndexChangedEventData) {
        const segmentedBar = args.object as SegmentedBar;

        console.log('SegmentedBar index changed to:', segmentedBar.selectedIndex)
        this.ver_item0 = false;
        this.ver_item1 = false;
        if (segmentedBar.selectedIndex == 0){
            this.ver_item0 = true;
        }
        else{
            this.ver_item1 = true;
        }

    }
}
